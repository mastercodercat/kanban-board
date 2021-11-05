import Board from "react-trello";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { changeCard, changeStage } from "store/modules/trello";
import { RootState } from "store/store";

const Main = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.trello.user);
  const workspace = useAppSelector((state) => state.trello.workspace);

  const data = {
    lanes: workspace.stages.map((stage) => ({
      id: stage.id.toString(),
      title: stage.name,
      label: `${stage.opportunities.length}/${stage.opportunities.length}`,
      cards: stage.opportunities.map((oppo) => ({
        id: oppo.id.toString(),
        title: oppo.name,
      })),
    })),
  };

  const handleChangeCard = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails
  ) => {
    dispatch(
      changeCard({
        id: parseInt(cardId, 10),
        stage: parseInt(targetLaneId, 10),
        position,
      })
    );
  };

  const handleChangeStage = (removedIndex, addedIndex, payload) => {
    dispatch(
      changeStage({
        id: parseInt(payload.id, 10),
        position: parseInt(addedIndex, 10),
      })
    );
  };

  return (
    <Board
      collapsibleLanes
      draggable
      handleDragEnd={handleChangeCard}
      handleLaneDragEnd={handleChangeStage}
      data={data}
    />
  );
};

export default Main;
