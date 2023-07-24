import page from 'https://unpkg.com/page/page.mjs';

export function pages(){
    page('/', function(ctx, next) {
        document.getElementById('text').innerText = 'Home Page';
        next();
      });
    
      page('/catalog', function(ctx, next) {
        document.getElementById('text').innerText = 'Catalog Page';
        next();
      });
    
      page('/users', function(ctx, next) {
        document.getElementById('text').innerText = 'Users Page';
        next();
      });
    
      page('/locations', function(ctx, next) {
        document.getElementById('text').innerText = 'Locations Page';
        next();
      });

      page();
}