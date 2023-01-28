export default function CardBody() {
  return (
    <div className="card-body">
      <div className="card-info">
        <h1 className="card-title">Laura Smith</h1>
        <p className="card-m-text">Frontend Developer</p>
        <p className="card-text">laurasmith.website</p>
      </div>
      <div className="card-btn-group">
        <div className="email-button">
          <i class="las la-envelope"></i>
          <p>Email</p>
        </div>
        <div className="linkedin-button">
          <i class="lab la-linkedin"></i>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="card-content">
        <h1>About</h1>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1 className="interest-title">Interests</h1>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
