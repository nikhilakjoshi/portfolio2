import React from 'react'
import { motion } from 'framer-motion'

const SVGReact = () => {
  return (
    <motion.svg
      width="63"
      height="56"
      transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
      animate={{
        rotate: 360,
      }}
      viewBox="0 0 63 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.7401 18.1499C51.0847 17.9257 50.4121 17.7187 49.7222 17.5118C49.843 17.0461 49.9464 16.5805 50.0327 16.132C51.5676 8.68146 50.5673 2.67961 47.1352 0.71349C43.8584 -1.18365 38.4774 0.799723 33.0619 5.50807C32.5445 5.95649 32.0099 6.43939 31.4925 6.93955C31.1475 6.61186 30.8026 6.28417 30.4577 5.97373C24.7663 0.92045 19.0749 -1.2009 15.66 0.782476C12.3831 2.67961 11.4001 8.31929 12.7798 15.3732C12.9178 16.0631 13.073 16.7529 13.2455 17.46C12.4349 17.6842 11.6588 17.9257 10.9172 18.1844C4.25993 20.5127 0 24.1518 0 27.9288C0 31.8265 4.57038 35.7415 11.5036 38.1216C12.0554 38.3113 12.6246 38.4838 13.211 38.6562C13.0213 39.4151 12.8488 40.1739 12.7108 40.8983C11.4001 47.8315 12.4176 53.3332 15.6945 55.2303C19.0749 57.1792 24.749 55.1786 30.268 50.3495C30.6991 49.9701 31.1475 49.5562 31.5787 49.1422C32.1479 49.6941 32.717 50.2115 33.2861 50.6944C38.6326 55.2993 43.9273 57.1619 47.187 55.2648C50.5673 53.3159 51.6539 47.4003 50.2396 40.1912C50.1362 39.6393 49.9982 39.0874 49.8602 38.501C50.2569 38.3803 50.6536 38.2596 51.033 38.1388C58.2421 35.7415 62.9505 31.8783 62.9505 27.9288C62.9332 24.1518 58.5353 20.4955 51.7401 18.1499ZM50.1707 35.6036C49.8257 35.7243 49.4808 35.8278 49.1186 35.9313C48.3253 33.4132 47.2387 30.7228 45.928 27.9633C47.187 25.2555 48.2218 22.6168 48.9979 20.0988C49.636 20.2885 50.2741 20.4782 50.8778 20.6852C56.7072 22.6858 60.26 25.6522 60.26 27.946C60.2427 30.3778 56.414 33.534 50.1707 35.6036ZM47.5836 40.7258C48.2218 43.9165 48.308 46.7794 47.8941 49.0388C47.5147 51.0566 46.773 52.4019 45.8245 52.9538C43.8411 54.1093 39.5984 52.6088 35.0281 48.6766C34.5106 48.2282 33.976 47.7452 33.4414 47.2278C35.2178 45.2962 36.9942 43.0369 38.7188 40.5361C41.7543 40.2602 44.6345 39.829 47.2387 39.2254C47.3767 39.7255 47.4974 40.2257 47.5836 40.7258ZM21.4376 52.7468C19.506 53.4367 17.9538 53.4539 17.0225 52.9193C15.0391 51.781 14.2113 47.3486 15.3323 41.4157C15.453 40.7431 15.6083 40.036 15.798 39.3289C18.385 39.898 21.2307 40.3119 24.2834 40.5534C26.0253 43.0024 27.8534 45.2617 29.6816 47.2278C29.2849 47.6073 28.8882 47.9867 28.4743 48.3316C26.0425 50.4702 23.5935 51.9879 21.4376 52.7468ZM12.3659 35.5863C9.29597 34.5343 6.76071 33.1718 5.01879 31.6886C3.44934 30.3433 2.67324 29.0326 2.67324 27.946C2.67324 25.6522 6.08809 22.7375 11.7967 20.7369C12.4866 20.4955 13.211 20.2712 13.9698 20.047C14.7632 22.6168 15.798 25.29 17.0397 27.9978C15.7807 30.74 14.7287 33.465 13.9353 36.0692C13.3834 35.914 12.866 35.7588 12.3659 35.5863ZM15.4013 14.873C14.2113 8.81944 15.0046 4.26631 16.988 3.12803C19.0921 1.90351 23.7487 3.64543 28.664 8.00885C28.9745 8.28479 29.2849 8.57798 29.6126 8.88843C27.7844 10.8545 25.9735 13.0966 24.2489 15.5284C21.2824 15.8044 18.454 16.2355 15.8497 16.8392C15.6773 16.1493 15.5393 15.4939 15.4013 14.873ZM42.5649 21.5648C41.944 20.4955 41.3058 19.4434 40.6505 18.4086C42.6511 18.6673 44.5827 18.995 46.3936 19.4089C45.859 21.1508 45.1691 22.9617 44.3758 24.8244C43.8066 23.7723 43.203 22.6685 42.5649 21.5648ZM31.4925 10.7856C32.7342 12.1308 33.976 13.6313 35.2005 15.2525C33.976 15.2007 32.717 15.1662 31.458 15.1662C30.2162 15.1662 28.9745 15.2007 27.7499 15.2525C28.9745 13.6485 30.2335 12.1481 31.4925 10.7856ZM20.3511 21.5992C19.7302 22.6858 19.1438 23.7723 18.5747 24.8589C17.7986 22.9962 17.126 21.1681 16.5741 19.4089C18.3677 19.0122 20.2821 18.6846 22.2827 18.4259C21.6101 19.4434 20.972 20.5127 20.3511 21.5992ZM22.3345 37.6559C20.2649 37.4317 18.3332 37.1213 16.5396 36.7246C17.0915 34.9309 17.7813 33.0683 18.5747 31.1712C19.1438 32.2577 19.7302 33.3442 20.3511 34.4308C20.9892 35.5346 21.6446 36.6039 22.3345 37.6559ZM31.5615 45.2962C30.2852 43.9165 29.009 42.3988 27.7672 40.7603C28.9745 40.8121 30.199 40.8293 31.458 40.8293C32.7342 40.8293 34.0105 40.7948 35.2523 40.7431C34.0277 42.416 32.786 43.9337 31.5615 45.2962ZM44.393 31.0677C45.2381 32.9821 45.9452 34.8447 46.5143 36.6039C44.6862 37.0178 42.7201 37.3627 40.6505 37.6042C41.3058 36.5694 41.944 35.5001 42.5821 34.3963C43.2202 33.2925 43.8239 32.1887 44.393 31.0677ZM40.2366 33.0683C39.2535 34.7757 38.2359 36.3969 37.2184 37.9491C35.3557 38.0871 33.4241 38.1561 31.458 38.1561C29.4919 38.1561 27.5947 38.0871 25.7666 37.9836C24.6973 36.4314 23.6625 34.793 22.6967 33.1028C21.7136 31.4126 20.8168 29.7224 20.0062 28.0323C20.8168 26.3421 21.7136 24.6347 22.6794 22.9617C23.6452 21.2716 24.68 19.6504 25.7321 18.0982C27.612 17.9602 29.5264 17.8912 31.458 17.8912C33.4069 17.8912 35.3212 17.9602 37.2011 18.1154C38.2359 19.6504 39.2535 21.2716 40.2366 22.9617C41.2196 24.6692 42.1337 26.3593 42.9443 28.015C42.1337 29.6535 41.2196 31.3609 40.2366 33.0683ZM45.79 3.04179C47.8941 4.24906 48.7219 9.16437 47.3939 15.5974C47.3077 16.0113 47.2215 16.4252 47.118 16.8564C44.5137 16.2528 41.668 15.8044 38.7016 15.5284C36.9769 13.0621 35.1833 10.8201 33.3724 8.88843C33.8553 8.42276 34.3382 7.97435 34.8211 7.56043C39.4605 3.49021 43.8066 1.90351 45.79 3.04179ZM31.458 22.3236C34.5624 22.3236 37.0804 24.8416 37.0804 27.946C37.0804 31.0504 34.5624 33.5685 31.458 33.5685C28.3536 33.5685 25.8356 31.0504 25.8356 27.946C25.8356 24.8416 28.3536 22.3236 31.458 22.3236Z"
        fill="#00D8FF"
      />
    </motion.svg>
  )
}

export default SVGReact
