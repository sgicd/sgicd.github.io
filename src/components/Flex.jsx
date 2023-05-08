export const Flex = ({ display, flexDirection, alignItems, justifyContent, children }) => {
  const styles = {
    display: display ?? "flex",
    ...(!!flexDirection && { flexDirection }),
    alignItems,
    justifyContent
  };
  return (
    <div style={styles}>
      {children}
    </div>
  )
}
