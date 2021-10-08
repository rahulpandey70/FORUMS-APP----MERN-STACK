const Notifies = require('../models/notifyModel')

const notifyCntrl = {
    createNotify: async (req, res) => {
        try {
            const { id, recipients, url, text, content } = req.body

            const notify = new Notifies({
                id, recipients, url, text, content, user: req.user._id
            })

            await notify.save()
            return res.json({notify})

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    removeNotify: async (req, res) => {
        try {
            const notify = await Notifies.findOneAndDelete({
                id: req.params.id, 
                url: req.query.url
            })
            return res.json({notify})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    getNotifies: async (req, res) => {
        try {
            const notifies = await Notifies.find({
                recipients: req.user._id
            }).sort('isRead').populate('user', 'avatar username')
            
            return res.json({notifies})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    isReadNotify: async (req, res) => {
        try {
            const notifies = await Notifies.findOneAndUpdate({_id: req.params.id},{
                isRead: true
            })

            return res.json({notifies})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deleteAllNotifies: async (req, res) => {
        try {
            const notifies = await Notifies.deleteMany({recipients: req.user._id})

            return res.json({notifies})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }

}

module.exports = notifyCntrl