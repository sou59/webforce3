$(() => {
  function readFile(file) {
     const reader = new FileReader();
     const deferred = $.Deferred();
     console.log(reader);
   };

   const inputFile = $('input[type=file]');
   inputFile.on('change', () => {
     console.clear();
     console.log(inputFile.val());
     readFile(inputFile.val());
   }); // end of onChange
}); // end of document ready
