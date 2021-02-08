import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchClass } from '../actions/actions';
import ClassCard from './ClassCard';
import InstructorForm from './InstructorForm';

import { ClassContainer, Hide } from '../styles/styled-components';

function ClassList({ fetchClass, classes }) {
  const [show, setShow] = useState(false);

	useEffect(() => {
		const id = JSON.parse(localStorage.getItem('userID'));
		fetchClass(id);
  }, []);
  
  console.log(classes)

  return (
    <>
    {show === true ? <Hide onClick={() => setShow(false)}></Hide> : null}
			{show === true ? (
				<InstructorForm setShow={setShow} />
			) : null}
       <h1>Classes</h1>
       <button onClick={() => setShow(!show)}>Classes</button>
       <ClassContainer>
       {classes.map(detail => (
        <h1 key={detail.id}>
          <ClassCard class={detail} />
        </h1>
     ))}
      </ClassContainer>
    </>
  );
}

const mapStateToProps = state => {
	return {
		classes: state.classes
	};
};
const mapDispatchToProps = { fetchClass };
export default connect(mapStateToProps, mapDispatchToProps)(ClassList);