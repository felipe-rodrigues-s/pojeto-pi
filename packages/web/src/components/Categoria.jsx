import { useEffect, useState } from 'react'


export function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/src/assets/link-img.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;


  return (
    <>
      {data.map((item) => {
        const { img1, img2, img3, category } = item;
        return (

          <a href={category} className="Category">
            <div className="Category-image">

              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
            </div>
            <p className="descriptionCategoria">{category}</p>
          </a>
        )
      })}
    </>
  )
}
