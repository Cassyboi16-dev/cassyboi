const shell = {
  margin: "0",
  padding: "32px",
  backgroundColor: "#f8f3e8",
  color: "#1c1917",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const container = {
  maxWidth: "640px",
  margin: "0 auto",
  padding: "28px",
  backgroundColor: "#ffffff",
  border: "1px solid #e7e5e4",
  borderRadius: "12px",
};

const label = {
  margin: "0 0 6px",
  color: "#047857",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const value = {
  margin: "0 0 20px",
  color: "#292524",
  fontSize: "16px",
  lineHeight: "1.6",
};

export default function EmailTemplate({ name, email, message }) {
  return (
    <div style={shell}>
      <div style={container}>
        <p style={label}>New portfolio message</p>
        <h1
          style={{
            margin: "0 0 24px",
            color: "#451a03",
            fontSize: "28px",
            lineHeight: "1.25",
          }}
        >
          Someone reached out from your contact page.
        </h1>

        <p style={label}>Name</p>
        <p style={value}>{name}</p>

        <p style={label}>Email</p>
        <p style={value}>{email}</p>

        <p style={label}>Message</p>
        <p style={{ ...value, whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
  );
}
