export default function joinWithLineBreak(
  arr: Array<JSX.Element>,
): Array<JSX.Element> {
  return arr.reduce((acc, current, index) => {
    if (index < arr.length - 1) {
      return [...acc, current, <br />];
    }
    return [...acc, current];
  }, []);
}
