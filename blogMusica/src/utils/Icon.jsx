export default function LineIcon({ name, size = "2rem", color = "#000",margin= "0" }) {
  return (
    <i
      className={`lni lni-${name}`}
      style={{ fontSize: size, color, margin:margin }}
      aria-hidden="true"
    ></i>
  );
}
