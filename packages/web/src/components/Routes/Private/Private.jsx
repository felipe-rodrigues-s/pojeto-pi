import React from "react";
import { Route } from "react-router-dom";
import StorageContext from "../../Store/Context";

const RoutesPrivate = ({ component: Component, ...props }) => {
  const {token} = useContext(StorageContext);

  return (
    <Route
      {...props}
      render={() => token ?
        <Component{...props} />
        : <Redirect to="/login" />
      }
    />
  )
}

export default RoutesPrivate
