export default function LineIcon({ name, size = "2rem", color = "#000" }) {
  return (
    <i
      className={`lni lni-${name}`}
      style={{ fontSize: size, color }}
      aria-hidden="true"
    ></i>
  );
}
