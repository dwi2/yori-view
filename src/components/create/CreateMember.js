import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { STORE_TYPES } from "../../services/types";

import "../../style/create/CreateMember.css";
import { costumes } from "../../constants/costumes";
import { cos_mem_map } from "../../constants/cos_mem_map";
import { members } from "../../constants/members";

const createPhotosCostume = (costume) => dispatch => {
  dispatch({
    type: "CREATE_PHOTO_COSTUME",
    data: costume
  });
};

const mapDispatchToProps = {
  createPhotosCostume
};

const mapStateToProps = state => {
  return {
    [STORE_TYPES.STATE.CREATE.GROUP]: state.create.group,
    [STORE_TYPES.STATE.CREATE.COSTUME]: state.create.costume
  };
};

const nextStepBtnDisabled = true;

class Create_Member extends Component {
  // constructor(props){
  //   super(props);
  // };

  renderCosTitle = () => {
    let title = "PHOTO_COSTUME";
    costumes.forEach(cos => {
      if (cos.cos_id === this.props.costume) title = cos.cos_name;
    });
    return <h3>{title}</h3>;
  };

  renderMemUl = members => {
    const liNodes = members.map(member => {
      return (
        <li className="select-button">
          <button>{member.member_name[0]}</button>
          <h6>{member.member_name}</h6>
        </li>
      );
    });
    return <ul>{liNodes}</ul>;
  };

  renderGenDiv = () => {
    let memberInThisCos = {};
    members.keyakizaka.forEach(member => {
      if (cos_mem_map[member.member_name_en].includes(this.props.costume)) {
        console.log(member);
        const thisGen = `gen${member.member_gen}`;
        if (memberInThisCos.hasOwnProperty(thisGen))
          memberInThisCos[thisGen].push(member);
        else memberInThisCos[thisGen] = [member];
      }
    });

    const genDivs = Object.entries(memberInThisCos).map(([gen, members]) => {
      console.log(gen, members);      
      return (
        <div 
          className='member-gen'
        >
          <h3></h3>
          {this.renderMemUl(members)}
        </div>
      );
    });
    return <div>{genDivs}</div>;
  };

  render() {
    this.props.createPhotosCostume(costumes[0].cos_id);
    return (
      <div className="create-member-container">
        {this.renderCosTitle()}
        {this.renderGenDiv()}
        <div className="main-button-container">
          <Link to="/create/group">
            <button className="main-button">もどる</button>
          </Link>
          <Link to="/create/type">
            <button
              disabled={nextStepBtnDisabled}
              className={
                nextStepBtnDisabled
                  ? "main-button disabled"
                  : "main-button next"
              }
            >
              次へ
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create_Member);
