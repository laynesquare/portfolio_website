import React from 'react';
import { Tooltip } from '@mui/material';

const MailCarrier = ({ contactMailCarrier }) => {
  return (
    <Tooltip
      title="Well, seems like you're a poor dancer since you didn't move in the slightest. But still, you can send me an email if you want to get in touch!"
      placement="left-start"
      enterDelay={0}
      open={contactMailCarrier}
      sx={{ lineHeight: '0.9rem' }}
    >
      <svg
        width="252"
        height="367"
        viewBox="0 0 252 367"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="mail_carrier" filter="url(#filter0_i_1_3)">
          <g id="overall">
            <g id="whole_body" filter="url(#filter1_i_1_3)">
              <g id="Group 1">
                <g id="carrier_body">
                  <g id="legs">
                    <path
                      id="leg"
                      d="M29.152 186.495C37.4149 186.495 44.1133 193.196 44.1133 201.464V338.68C44.1133 346.948 37.4149 353.649 29.152 353.649C20.8891 353.649 14.1906 346.948 14.1906 338.68V201.464C14.1906 193.196 20.8891 186.495 29.152 186.495Z"
                      fill="#B8B8B8"
                    />
                    <path
                      id="leg"
                      d="M91.4909 186.495C99.7545 186.495 106.452 193.196 106.452 201.464V338.68C106.452 346.948 99.7545 353.649 91.4909 353.649C83.2272 353.649 76.5295 346.948 76.5295 338.68V201.464C76.5295 193.196 83.2272 186.495 91.4909 186.495Z"
                      fill="#B8B8B8"
                    />
                  </g>
                  <path
                    id="body_2"
                    d="M76.5295 116.639H44.1133C27.5875 116.639 14.1906 130.043 14.1906 146.577V206.454C14.1906 222.987 27.5875 236.392 44.1133 236.392H76.5295C93.0543 236.392 106.452 222.987 106.452 206.454V146.577C106.452 130.043 93.0543 116.639 76.5295 116.639Z"
                    fill="#B8B8B8"
                  />
                  <path
                    id="carrier_arm1"
                    d="M166.637 198.104C164.175 205.394 159.338 210.344 155.834 209.159L41.6383 170.546C38.134 169.361 37.2903 162.491 39.7529 155.201C42.2154 147.911 47.0516 142.961 50.5559 144.146L164.752 182.759C168.256 183.944 169.1 190.814 166.637 198.104Z"
                    fill="#B8B8B8"
                  />
                  <path
                    id="carrier_arm2"
                    d="M28.5679 176.26C24.9879 169.582 25.4919 162.34 29.6936 160.086L166.635 86.6039C170.837 84.349 177.144 87.9355 180.724 94.614C184.304 101.292 183.801 108.534 179.599 110.789L42.6578 184.27C38.456 186.525 32.1479 182.939 28.5679 176.26Z"
                    fill="#B8B8B8"
                  />
                </g>
                <path
                  id="head"
                  d="M60.3214 101.67C84.4216 101.67 103.959 82.123 103.959 58.0103C103.959 33.8976 84.4216 14.3505 60.3214 14.3505C36.2212 14.3505 16.6841 33.8976 16.6841 58.0103C16.6841 82.123 36.2212 101.67 60.3214 101.67Z"
                  fill="#B8B8B8"
                />
              </g>
            </g>
          </g>
          <g id="mail">
            <g id="bottom" filter="url(#filter2_i_1_3)">
              <path
                d="M175.468 170.48L175.445 130.436L205.859 147.373C207.399 148.23 209.276 148.214 210.801 147.329L239.978 130.399L240.001 170.443C240.002 172.1 238.659 173.444 237.003 173.445L178.47 173.479C176.813 173.48 175.469 172.137 175.468 170.48Z"
                fill="#B8B8B8"
              />
            </g>
            <g id="top" filter="url(#filter3_i_1_3)">
              <path
                d="M239.976 127.867L175.443 127.867L205.922 144.304C207.429 145.117 209.247 145.102 210.741 144.264L239.976 127.867Z"
                fill="#B8B8B8"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_1_3"
            x="0"
            y="0"
            width="252"
            height="371"
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
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_3"
            />
          </filter>
          <filter
            id="filter1_i_1_3"
            x="14.1906"
            y="14.3505"
            width="172.921"
            height="343.299"
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
              result="effect1_innerShadow_1_3"
            />
          </filter>
          <filter
            id="filter2_i_1_3"
            x="175.445"
            y="130.399"
            width="68.5562"
            height="47.0799"
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
              result="effect1_innerShadow_1_3"
            />
          </filter>
          <filter
            id="filter3_i_1_3"
            x="175.443"
            y="127.867"
            width="67.5329"
            height="21.0364"
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
            <feOffset dx="3" dy="5" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1_3"
            />
          </filter>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default MailCarrier;
