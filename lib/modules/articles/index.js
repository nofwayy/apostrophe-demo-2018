module.exports = {        
   name: 'article',        
   extend: 'apostrophe-pieces',        
   label: 'Article',        
   pluralLabel: 'Articles',        
   addFields: [
     {
       name: 'thumbnail',
       label: 'Thumnail',
       type: 'singleton',
       widgetType: 'apostrophe-images',
       options: {
         aspectRatio: [ 3, 2 ],
         limit: [ 1 ]
       }
     }
   ]        
};