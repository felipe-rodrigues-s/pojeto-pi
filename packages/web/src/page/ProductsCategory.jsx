const url = window.location.pathname;

let urlSplit = url.split("/")[1];

export function ProductsCategory() {


  return (
    <>
      <h1>Essa e a seção produto {urlSplit}</h1>
    </>
  )
}

