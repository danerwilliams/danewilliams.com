export const getGithubForks = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await response.json();
  return data.forks_count;
};
