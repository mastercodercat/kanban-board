import React, { Suspense } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { RootState } from "store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "components/Loader";

const Main = React.lazy(() => import("containers/Main"));
const SigninPage = React.lazy(() => import("containers/Auth/SigninPage"));

const App = () => {
  const user = useAppSelector((state: RootState) => state.trello.user);
  const loading = useAppSelector((state: RootState) => state.trello.loading);

  const renderAuth = () => {
    return (
      <Switch>
        <Route exact path="/signin" component={SigninPage}></Route>

        <Redirect to="/signin" />
      </Switch>
    );
  };

  const renderMain = () => {
    return (
      <Switch>
        <Route exact path="/" component={Main}></Route>

        <Redirect to="/" />
      </Switch>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Container fluid className="p-0">
            <DndProvider backend={Backend}>
              {loading ? <Loader /> : user.id ? renderMain() : renderAuth()}
            </DndProvider>
          </Container>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
