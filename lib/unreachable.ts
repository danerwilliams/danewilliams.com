export const unreachable = (x: never): never => {
  throw new Error(`Unreachable case in switch: ${JSON.stringify(x)}`);
};
