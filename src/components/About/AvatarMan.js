import React from 'react';
import { Tooltip } from '@mui/material';

const AvatarMan = ({ aboutAvatarMan }) => {
  return (
    <Tooltip
      title="Yo, let's battle to the music. Show me what you got!"
      placement="left"
      enterDelay={0}
      open={aboutAvatarMan}
      sx={{ lineHeight: '0.9rem' }}
    >
      <svg
        width="194"
        height="194"
        viewBox="0 0 194 194"
        xmlns="http://www.w3.org/2000/svg"
        // shapeRendering="geometricPrecision"
      >
        <g id="Frame 4 1">
          <g id="Frame 1" filter="url(#filter0_i_1_2)">
            <g id="Group 1">
              <g id="avatar_body">
                <g id="legs">
                  <path
                    id="arms"
                    d="M84 98C87.3137 98 90 100.686 90 104V159C90 162.314 87.3137 165 84 165C80.6863 165 78 162.314 78 159V104C78 100.686 80.6863 98 84 98Z"
                    fill="#B8B8B8"
                  />
                  <path
                    id="arms_2"
                    d="M109 98C112.314 98 115 100.686 115 104V159C115 162.314 112.314 165 109 165C105.686 165 103 162.314 103 159V104C103 100.686 105.686 98 109 98Z"
                    fill="#B8B8B8"
                  />
                </g>
                <path
                  id="body_2"
                  d="M103 70H90C83.3726 70 78 75.3726 78 82V106C78 112.627 83.3726 118 90 118H103C109.627 118 115 112.627 115 106V82C115 75.3726 109.627 70 103 70Z"
                  fill="#B8B8B8"
                />
                <path
                  id="arms_3"
                  d="M42 75.5C42 72.4624 44.4624 70 47.5 70H146.5C149.538 70 152 72.4624 152 75.5C152 78.5376 149.538 81 146.5 81H47.5C44.4624 81 42 78.5376 42 75.5Z"
                  fill="#B8B8B8"
                />
              </g>
              <path
                id="avatar_head"
                d="M96.5 64C106.165 64 114 56.165 114 46.5C114 36.835 106.165 29 96.5 29C86.835 29 79 36.835 79 46.5C79 56.165 86.835 64 96.5 64Z"
                fill="#B8B8B8"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_1_2"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_2"
            />
          </filter>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default AvatarMan;
