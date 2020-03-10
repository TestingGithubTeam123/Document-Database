const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Test Model
 * ==========
 */
const Location = new keystone.List('Location', {
    track: true,
});

Location.add({
    name: { type: String, required: true, index: true, initial: true },
    GDriveLink: {type: Types.Url , index: true, },
});


/**
 * Relationships
 */
Location.relationship({ ref: 'Record', path: 'record', refPath: 'location' });

/**
 * Registration
 */
Location.defaultColumns = 'name';
Location.register();
