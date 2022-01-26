import { Container } from "react-bootstrap";

export default function Timeline({ children }) {
  return (
    <>
      <Container className="p-4">
        <h2 className="mt-3 text-center">
          <strong>TIMELINE</strong>
        </h2>
        <div className="row">
          <div className="col mt-4">
            <div className="timeline-body bg-themed">{children}</div>
          </div>
        </div>
      </Container>
    </>
  );
}
