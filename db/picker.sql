CREATE TABLE picker_posts
(
  id               INT(10) UNSIGNED                NOT NULL AUTO_INCREMENT
    PRIMARY KEY,
  author           INT(10) UNSIGNED                NOT NULL,
  status           VARCHAR(20) DEFAULT 'publish'   NOT NULL,
  password         VARCHAR(32) DEFAULT ''          NOT NULL,
  title            VARCHAR(255) DEFAULT ''         NOT NULL,
  name             VARCHAR(255) DEFAULT ''         NOT NULL,
  guid             VARCHAR(255) DEFAULT ''         NOT NULL,
  excerpt          TEXT                            NULL,
  allow_comment    TINYINT(11) DEFAULT '1'         NOT NULL,
  date             BIGINT(13) UNSIGNED DEFAULT '0' NOT NULL,
  modified         BIGINT(13) UNSIGNED DEFAULT '0' NOT NULL,
  comment_num      INT DEFAULT '0'                 NOT NULL,
  menu_order       INT DEFAULT '0'                 NOT NULL,
  type             VARCHAR(20) DEFAULT 'article'   NOT NULL,
  mime_type        VARCHAR(100) DEFAULT ''         NOT NULL,
  parent           BIGINT DEFAULT '0'              NOT NULL,
  is_public        INT DEFAULT '1'                 NOT NULL,
  content_json     JSON                            NULL
);


INSERT INTO picker_resume.picker_posts (author, status, password, title, name, guid, excerpt,allow_comment, date, modified, comment_num, menu_order, type, mime_type, parent, is_public, content_json) VALUES (22, 'publish', '', '', '', '', null, 1, 1491319585041, 1491319585041, 0, 0, 'resume', '', 0, 1, '{"resume": {"work": [{"company": "", "endDate": "", "summary": "", "website": "", "position": "", "startDate": "", "highlights": []}], "awards": [{"date": "", "title": "", "awarder": "", "summary": ""}], "basics": {"name": "", "email": "", "label": "", "phone": "", "picture": "/static/assets/images/avatar.png", "summary": "", "website": "", "location": {"city": "", "region": "", "address": "", "postalCode": "", "countryCode": ""}, "profiles": [{"url": "", "network": "", "username": ""}], "highlights": []}, "skills": [{"name": "", "level": "", "keywords": []}], "version": "1.0", "education": [{"gpa": "", "area": "", "courses": [], "endDate": "", "startDate": "", "studyType": "", "institution": ""}], "interests": [{"name": "", "keywords": []}], "languages": [{"fluency": "", "language": ""}], "volunteer": [{"endDate": "", "summary": "", "website": "", "position": "", "startDate": "", "highlights": [], "organization": ""}], "workLabel": "", "references": [{"name": "", "position": "", "reference": ""}], "publications": [{"isbn": "", "name": "", "summary": "", "website": "", "publisher": "", "releaseDate": ""}], "additionalWork": [{"company": "", "endDate": "", "summary": "", "website": "", "position": "", "startDate": "", "highlights": []}], "publicationsLabel": "", "additionalWorkLabel": "", "additionalPublications": [{"isbn": "", "name": "", "summary": "", "website": "", "publisher": "", "releaseDate": ""}], "additionalPublicationsLabel": ""}}');