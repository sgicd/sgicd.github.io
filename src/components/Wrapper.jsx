import { Container } from "react-bootstrap";

export const Wrapper = ({ children }) => {
  return (
    <div className="py-4 bg-light">
      <Container fluid="xl" className="mt-1 mb-2">
        <div className="container-bg p-4 bg-white mb-4">
          {children}
        </div>
      </Container>
    </div>
  )
}