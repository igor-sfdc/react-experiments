import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ChildrenWithProps = props => {
  const { childrenProps, children } = props;
  return (
    <Fragment>
      {React.cloneElement(React.Children.only(children), { ...childrenProps })}
    </Fragment>
  );
};

ChildrenWithProps.propTypes = {
  childrenProps: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired // Only one child is expected
};

export default ChildrenWithProps;
