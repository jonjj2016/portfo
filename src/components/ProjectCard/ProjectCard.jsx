import React from 'react';
import { Wrapper } from './Styled';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Zoom from 'react-reveal/Zoom';

const ProjectCard = ({ project, index }) => {
  const dir = index % 2 === 0 ? 'right' : 'left';
  // console.log(project);
  const history = useHistory();
  const onProjectClicked = () => {
    history.push(`/projects/${project.code}`);
  };

  return (
    <Zoom>
      <Wrapper>
        <div className='menu'>
          <div className='circles'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
          </div>
          <div className='title'>{project.title}</div>
        </div>
        <img className='main_image' src={`/images/projects/${project.code}/1.png`} alt='' />
        <div className='secondary_image' style={{ backgroundImage: `url(/images/projects/${project.code}/2.png)` }}>
          <div className='controllers'>
            <Button onClick={onProjectClicked} inverted>
              More
            </Button>
          </div>
        </div>
      </Wrapper>
    </Zoom>
  );
};

export default ProjectCard;
