export default function SystemFlow({ steps, label, conceptual = false }) {
  return (
    <figure className="system-flow">
      <figcaption className="eyebrow mb-4">{label}{conceptual && " · conceptual"}</figcaption>
      <ol className="flow-chain" aria-label={label}>
        {steps.map((step, index) => (
          <li key={step} className="flow-step">
            {index > 0 && <span aria-hidden="true" className="flow-connector" />}
            <span className="flow-node"><span aria-hidden="true" className="flow-port" />{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
