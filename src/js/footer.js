document.addEventListener('DOMContentLoaded', function() {
  const footerData = {
    socialIcons: [
      { iconClasses: ['fab', 'fa-github-square'], link: 'https://github.com/nosotros6', target: '_blank' },
      { iconClasses: ['fas', 'fa-envelope'], link: 'mailto:pilargarciaroyo@gmail.com' },
      { iconClasses: ['fab', 'fa-linkedin'], link: 'https://www.linkedin.com/in/pilar-garcia-royo-diseñadora-web' },
      // { iconClasses: ['fab', 'fa-whatsapp'], link: 'https://wa.me/NUMERO_DE_CELULAR' },

    ],
    githubLink: 'https://github.com/nosotros6/pilar-garcia-portafolio',
    githubImageSrc: 'https://user-images.githubusercontent.com/5679180/79618120-0daffb80-80be-11ea-819e-d2b0fa904d07.gif',
    footerText: 'Diseño y Desarrollo Web: Pilar García Royo -  pilargarciaroyo@gmail.com - +56 9 9440 4516 / Fotografías: Isabel Torres',
  };

  function populateFooter(containerId, data) {
    const container = document.getElementById(containerId);

    const socialIconsList = document.createElement('ul');
    socialIconsList.classList.add('nav', 'flex-row', 'icono-footer');
    data.socialIcons.forEach(socialIconData => {
      const socialIconItem = document.createElement('li');
      const socialIconLink = document.createElement('a');
      socialIconLink.classList.add('nav-link', 'active', 'text-center');
      socialIconLink.href = socialIconData.link;
      socialIconLink.target = socialIconData.target;

      const socialIcon = document.createElement('i');
      socialIconData.iconClasses.forEach(iconClass => {
        socialIcon.classList.add(iconClass);
      });

      socialIconLink.appendChild(socialIcon);
      socialIconItem.appendChild(socialIconLink);
      socialIconsList.appendChild(socialIconItem);
    });

    const githubLink = document.createElement('a');
    githubLink.href = data.githubLink;
    githubLink.target = '_blank';

    const githubImage = document.createElement('img');
    githubImage.src = data.githubImageSrc;
    githubImage.width = '24px';

    githubLink.appendChild(githubImage);

    const footerText = document.createElement('a');
    footerText.classList.add('nav-link', 'disabled', 'text-center', 'text-white', 'texto-footer', 'pb-4', 'my-0');
    footerText.textContent = data.footerText;

    container.appendChild(socialIconsList);
    container.appendChild(githubLink);
    container.appendChild(footerText);
  }

  populateFooter('footerContainer', footerData);
});
