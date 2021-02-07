import React from 'react';
import {useSelector} from "react-redux";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {ResultReportComponent} from "material/components/modal/ResultReportComponent";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DataModalComponent = () => {
    
    const uiState = useSelector(state => state.userInterface);

    return (
        <div>
            <Dialog
                open={uiState.isModalOpen}
                TransitionComponent={Transition}
                disableBackdropClick={true}
                aria-labelledby="alert-dialog-slide-title"
            >
                <DialogTitle id={"alert-dialog-slide-title"}>Game Settings</DialogTitle>
                <DialogContent>
                    Settings will be here
                </DialogContent>
                <DialogTitle id={"alert-dialog-slide-title"}>Add Results</DialogTitle>
                <DialogContent>
                    <ResultReportComponent/>
                </DialogContent>
            </Dialog>
        </div>
    );
};