import React from 'react';

const Ghe = ({ ghe, onSelect }) => {
  const { ten, trangThai, loaiGhe } = ghe;

  const handleClick = () => {
    onSelect(ghe);
  };

  const getStatusClassName = () => {
    if (trangThai === 'DaChon') {
      return 'ghe-da-chon';
    } else if (trangThai === 'ChuaChon') {
      return 'ghe-chua-chon';
    } else {
      return 'ghe-dang-chon';
    }
  };

  return (
    <div className={`ghe ${getStatusClassName()}`} onClick={handleClick}>
      <span>{ten}</span>
      <span>{loaiGhe.ten}</span>
    </div>
  );
};

export default Ghe;
