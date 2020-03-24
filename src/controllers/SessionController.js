const connection = require('../database/connection');

module.exports = {
  async create(req, res){
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();
    
    if (!ong){
      return res.select(400).json({error: 'Nenhuma ong encontrada com esse id'});
    }
    return res.json(ong);
  }
}