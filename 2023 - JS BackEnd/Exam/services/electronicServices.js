const Electronic = require('../models/Electronic');


async function createElectronic(electronicData){
    const createData = new Electronic(electronicData);

    console.log(createData);
}



async function getElectronics() {
    try {
      const electronics = await Electronic.find({}).exec();
      return electronics;
    } catch (error) {
      console.error('Error fetching electronics:', error);
      return {error:error}
    }
  }

async function getElectronicData(id){

    try{
        const getData = await Electronic.findById(id).lean();

        return getData
    }catch(error){
        console.error('Error fetching data for electronic',error);

        return {
            error : error
        }
    }
}


async function deleteElectronic(id){

    try{
        const removeElectronic = await Electronic.deleteOne({_id : id}).exec();

        return removeElectronic;
    }catch(error){
        console.error('Error while trying to remove electronic',error);

        return {
            error : error
        }
    }
}


async function updateElectronic(id, updateData) {
    try {

      const updatedElectronic = await Electronic.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      );
  
      return updatedElectronic;
    } catch (error) {
      console.error('Error while trying to update Electronic : ', error);
  
      return {
        error: error,
      };
    }
  }
async function getSpecificElectronicData(searchData){

    try{
        const result = await Electronic.find(searchData).exec();


        return result;
    }
    catch(error){
        console.error('Error while trying to search data : ', error);


        return {
            error: error,
        }
    }
}

module.exports = {
    createElectronic : createElectronic,
    getElectronics : getElectronics,
    getElectronicData : getElectronicData,
    deleteElectronic : deleteElectronic,
    updateElectronic : updateElectronic,
    getSpecificElectronicData : getSpecificElectronicData,
}