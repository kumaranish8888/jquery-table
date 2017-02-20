(function(){

    var books = [
        {
            id:"ID",
            name:"Name",
            author:"Author"
        },
        {
            id:"101",
            name:"The knight",
            author:"Anish Kumar"
        },
        {
            id:"102",
            name:"Shadow",
            author:"Bikash Joshi"
        },
        {
            id:"103",
            name:"The Mailman",
            author:"Ankit sharma"
        },
        {
            id:"104",
            name:"Sun down",
            author:"Saurabh tiwari"
        }
    ];

    $(document).ready(function(){
        bindtable();
    });

    function bindtable(){
        for(var i=0; i<books.length; i++){
            var table = bindtrtag(books[i]);
            $("#tbl").append(table);
        }
    }

    function bindtrtag(book){
        var trtag = $("<tr/>");
        var myid = bindtdtag(book.id);
        var myname = bindtdtag(book.name);
        var myauthor = bindtdtag(book.author);
        $(trtag).append(myid).append(myname).append(myauthor);
        return trtag;
    }

    function bindtdtag(mydetails){
        var tdtag = $("<td/>");
        $(tdtag).text(mydetails);
        return tdtag;
    }


})();