import React, {useState} from 'react'
import Title from '../common/Title'
import "../../style/components/section/Contact.css"

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //오픈카톡 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  //오픈카톡 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //이메일 복사
  const copyEmail = () => {
    const email = "ckdrl9287@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("이메일이 복사되었습니다");
      })
      .catch((err) => {
        console.error("이메일 복사 실패: ", err);
      });
  };

  return (
    <div className='contact'>
      <Title title={'<Contact />'} />
      <div className="contact-container">
        <div className="contact-wrap">
          <div className="contact-footer">
            <h2>{"<Footer />"}</h2>
            <p>소중한 시간을 내어 제 포트폴리오를 봐주셔서  감사합니다.</p>
            <p>마지막으로 <em>저는</em></p>
            <p><em>새로운 도전</em>은 저를 성장시키는 원동력이라고 생각합니다.</p>
            <p>원활한 <em>의사소통</em>으로 팀과 협력해 최고의 결과물을 만들 자신이 있습니다.</p>
            <p><em>사용자 중심</em>을 최우선으로 생각하며 이를 실현하기 위해 노력하고 있습니다.</p>
            <p>저의 가능성을 믿고 함께 성장할 기회를 주신다면 최선을 다해 보답하겠습니다.</p>
          </div>
          <div className="contact-link">
            <h2>{"<Link />"}</h2>
            <ul>
              <li>
                <a href="https://github.com/chang9287">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/contact-git.png`} alt="GitHub" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-contact">
            <h2>{"<Contact />"}</h2>
            <ul>
              <li>
                <a 
                  href="#none"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  <img src={`${process.env.PUBLIC_URL}/assets/images/contact-kakao.png`} alt="OpenKakao" />
                  <span>OpenKakao</span>
                </a>
              </li>
              <li>
                <a 
                  href="#none"
                  onClick={(e) => {
                    e.preventDefault();
                    copyEmail();
                  }}
                >
                  <img src={`${process.env.PUBLIC_URL}/assets/images/contact-email.png`} alt="Email" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-mail">
          {/* <img src="/assets/images/portfolio-openkakao-talk-image.jpg" alt="" /> */}
        </div>
      </div>
      {/* 모달 창 */}
      {isModalOpen && (
        <div className="modal-container" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src="/assets/images/portfolio-openkakao-talk-image.jpg" alt="OpenKakao-Talk" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
