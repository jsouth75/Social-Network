const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: String,
            default: dateFormat(new Date())
        }
    },
    {        
        toJSON: {
            getters: true,
        },
        id: false
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1, 
            maxLength: 280
        },
        createdAt: {
            type: String,
            required: true,
            default: Date.now()
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        },
        reactions: [
            reactionSchema
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const thought = model('thought', thoughtSchema);

module.exports = thought;