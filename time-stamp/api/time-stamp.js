module.exports= function(app){
    
    app.get('/:query',function(req,res){
        
        var date  = req.params.query;
        var unix  = null
        var natural = null;
        
        
        if(isNaN(date)){
            if(isNaN(new Date(date).getTime())){
                
                unix = natural = null;
            }
            else{
                natural = date ;
                unix = new Date(date).getTime();
                
            }
        }
        else{
            
            unix = date ;
            natural = new Date(date);
        }
        
        var obj = { "unix" : unix , "natural" : natural};
        res.send(JSON.stringify(obj));
        
    })
    
    
    
}
