// Reusable Button component with customizable text
// Usage options:
// <Button>Texto</Button>            // via children (recomendado)
// <Button label="Texto" />         // via prop label (fallback)
// Acepta cualquier prop nativa de <button> (onClick, type, disabled, etc.)
import "./Button.css";
const Button = ({ children, label, className = "", ...props }) => {
    const content = children ?? label ?? "Click Me";
    return (
        <button className={className} {...props}>
            {content}
        </button>
    );
};

export default Button;