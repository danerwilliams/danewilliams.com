export const getGithubContributorsCount = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) => {
  /*
  Extract the last page number from page size 1 requesting the list of contributors to get the total number.
  We can pull it out of the Link header, for example link header could have this value:
  <https://api.github.com/repositories/247190148/contributors?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/247190148/contributors?per_page=1&page=102>; rel="last"
  */
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=1`,
  );
  const linkHeader = response.headers.get('Link');

  if (!linkHeader) {
    const contributors = await response.json();
    return contributors.length;
  }

  const links = linkHeader.split(', ');
  const lastLink = links.find((link) => link.endsWith('rel="last"'));

  if (!lastLink) {
    return 0;
  }

  const urlPart = lastLink.split(';')[0];
  const urlString = urlPart.substring(1, urlPart.length - 1);
  const url = new URL(urlString);
  const pages = url.searchParams.get('page');

  if (!pages) {
    return 0;
  }

  return parseInt(pages, 10);
};
