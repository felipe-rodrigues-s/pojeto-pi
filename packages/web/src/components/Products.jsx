import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/src/assets/produtos.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;


   return (
    <>
      {data.map((item) => {
        const { id, img, name } = item;
        return (

          <Link to={`/produto/${id}`} className="Produto">
            <div className="Produto-image">
              <img src={img} />
            </div>
            <p className="nameProduto">{name}</p>
          </Link>
        )
      })}
    </>
  )
}

