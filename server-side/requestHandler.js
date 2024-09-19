import donorSchema from './models/donor.model.js'

export async function Home(req,res){
    try{
        console.log(req.body);
        const{...donor} = req.body;
        const data = await donorSchema.create({...donor});
        res.status(201).send({msg:data});


    }catch(error){
        res.status(404).send({msg:error})
    }
}