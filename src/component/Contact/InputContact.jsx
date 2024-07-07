export default function InputContact({ textBox, placeholder, ...props }) {
  let content = (
    <input
      {...props}
      placeholder={placeholder}
      className="name form-input"
      required
    />
  );

  if (textBox) {
    content = (
      <textarea
        className="name form-input"
        cols="30"
        rows="5"
        placeholder={placeholder}
        required
        {...props}
      ></textarea>
    );
  }

  return content;
}
