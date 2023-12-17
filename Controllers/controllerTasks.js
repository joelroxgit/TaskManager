const taskModel = require('../Models/modelTask')

const getAllTasks = async(req,res)=>{
    try {
        const task = await taskModel.find({})
        res.json(task)
    } catch (error) {
        res.status(500)
        throw new Error("cant find ")
    }
}

const createTask = async (req,res)=>{
    try {
   
        const task = await taskModel.create(req.body)
        res.json(task)
            
    }
    catch (error) {
        res.status(500).json({msg:error})

}    
}
const getTask = async(req,res)=>{
    try {
        const {id: taskId} = req.params
        const task = await taskModel.findOne({_id: taskId})
        if(!task){
            return res.status(404).json({msg:`no task with  is ${taskId}`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTask = (req,res)=>{
    res.send('update Task')
}
const deleteTask = (req,res)=>{
    res.send('delete Task')
}


module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}