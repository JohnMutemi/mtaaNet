const TeamMember = ({ name, role, imageUrl, description }) => {
  return (
    <div className="col-lg-6 pt32 pb32">
      <div className="row s_col_no_resize s_col_no_bgcolor">
        <div className="col-lg-3 pb24">
          <img
            src={imageUrl}
            className="img-fluid rounded-circle w-lg-100 mx-lg-auto"
            alt={name}
          />
        </div>
        <div className="col-lg-9">
          <h4 className="h5-fs">{name}</h4>
          <p className="text-muted mb-3">{role}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Tony Fred',
      role: 'Chief Executive Officer',
      imageUrl: '/web/image/website.s_company_team_image_1',
      description:
        'Founder and chief visionary, Tony is the driving force behind the company...',
    },
    {
      name: 'Mich Stark',
      role: 'Chief Commercial Officer',
      imageUrl: '/web/image/website.s_company_team_image_2',
      description: 'Mich loves taking on challenges...',
    },
  ];

  return (
    <section className="s_company_team pt48 pb48">
      <div className="container">
        <h3>Meet our dedicated team of experts</h3>
        <p className="lead">Dedicated professionals driving our success</p>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
