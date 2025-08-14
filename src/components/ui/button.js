export function Button({ variant='primary', className='', asChild, href, children, ...props }){
  const base = variant==='outline' ? 'btn btn-outline' : 'btn btn-primary';
  const Comp = asChild ? 'a' : 'button';
  const attrs = asChild ? { href } : {};
  return <Comp className={`${base} ${className}`} {...attrs} {...props}>{children}</Comp>
}