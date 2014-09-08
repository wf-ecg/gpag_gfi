module.exports = {

    // CONNECT
    // https://github.com/tomusdrw/grunt-sync

    main: {
        files: [ {
            cwd: 'app',
            src: ['**/*'],
            dest: '/web/docs/wf-ecg/gpag_gfi/0/'
        }],
        //pretend: true,
        updateOnly: true, // Don't remove any files from `dest` (works around 30% faster)
        verbose: true,
    },
};
