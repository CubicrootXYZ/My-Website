FROM httpd:2.4
COPY ./index.html /usr/local/apache2/htdocs/index.html
COPY ./impressum.html /usr/local/apache2/htdocs/impressum.html
COPY ./assets /usr/local/apache2/htdocs/assets
COPY ./uploads /usr/local/apache2/htdocs/uploads
COPY ./run.sh ./run.sh
COPY ./httpd.conf ./conf/httpd.conf

CMD ["bash","run.sh"]