const variantClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  outline: "btn btn-secondary", // alias
};

export function Button({ variant = "primary", className = "", asChild, href, fullWidth, children, ...props }) {
  const base = variantClasses[variant] || variantClasses.primary;
  const Comp = asChild ? "a" : "button";
  const attrs = asChild ? { href } : {};
  const widthClass = fullWidth ? "btn-full" : "";

  return (
    <Comp className={`${base} ${widthClass} ${className}`} {...attrs} {...props}>
      {children}
    </Comp>
  );
}
