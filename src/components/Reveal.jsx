<div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar py-2">
  {[...imgs].map((src, i)=> (
    <img key={i} src={src} alt="" className="h-40 w-64 object-cover rounded-xl snap-start shrink-0" />
  ))}
</div>
