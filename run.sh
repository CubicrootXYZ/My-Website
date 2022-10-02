sed -i "s/FULLNAME/$FULLNAME/" /usr/local/apache2/htdocs/impressum.html
sed -i "s/STREET/$STREET/" /usr/local/apache2/htdocs/impressum.html
sed -i "s/CITY/$CITY/" /usr/local/apache2/htdocs/impressum.html

httpd-foreground