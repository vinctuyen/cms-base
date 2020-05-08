import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import Divider from "@material-ui/core/Divider";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import WebIcon from "@material-ui/icons/Web";
import Icon from "@material-ui/core/Icon";

function IconStats(props) {
  let classLabel = "";
  let classIcon = "";
  if (props.type === 1) {
    classLabel = "label__stats label__stats1";
    classIcon = "store";
  } else if (props.type === 2) {
    classLabel = "label__stats label__stats2";
    classIcon = "content_copy";
  } else if (props.type === 3) {
    classLabel = "label__stats label__stats3";
    classIcon = "bug_report";
  } else {
    classLabel = "label__stats label__stats4";
    classIcon = "camera";
  }
  return (
    <div className={classLabel}>
      <Icon className='icon__stats'>{classIcon}</Icon>
    </div>
  );
}

function IconTime(props) {
    let icon = "";
    if (props.time === 1) {
        icon = "date_range";
    } else if (props.time === 2) {
        icon = "local_offer";
    } else if (props.time === 3) {
        icon = "update";
    } else {
        icon = "warning";
    }
    return (
        <Icon style={{fontSize: '16px'}} >{icon}</Icon>
    );
  }
function Card(props) {
  return (
    <Container maxWidth="xl" className="card__stats">
      <Grid container className="padding__none">
        <Grid item xs={12} className="title__stats">
          <IconStats type={props.id} />
          <span className="type__stats">{props.type}</span>
          <span className="value__stats">${props.value}</span>
        </Grid>
        <Divider className="divider__stats" />
        <Grid item xs={12} className="footer__stats">
          <IconTime time={props.id} />
          <span>{props.time}</span>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Card;
