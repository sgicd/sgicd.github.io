export const Flex = ({flexDirection, alignItems, justifyContent, children}) => {
  const styles = {
    display: "flex",
    ...(!!flexDirection && {flexDirection}),
    alignItems,
    justifyContent
  };
  return (
    <div style={styles}>
      {children}
    </div>
  )
}