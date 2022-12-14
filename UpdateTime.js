const UpdateTime = (posting) => {
    const msgap = Date.now() - posting.createdAt;
    const minutegap = Math.floor(msgap / 60000);
    const hourgap = Math.floor(msgap / 3600000);

    if (msgap < 0) {
      return <p>0분전</p>;
    }
    if (hourgap > 24) {
      return <p>{posting.createdDate}</p>;
    }
    if (minutegap > 60) {
      return <p>{hourgap}시간 전</p>;
    } else {
      return <p>{minutegap}분 전</p>;
    }
  };